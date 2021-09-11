/*!
 \file       main.c
 \Version    0.1
 \modified
 \copyright  (c) Sebastian Schuster ( info@tinkr.de )
 \licence    GPL
 \brief      main of LED-Flitzer - App Waage
 \author     Sebastian Schuster
 \date       2009/11/27


 for ATmega8L, internal RC-Osc. 1MHz

*/



#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

#include <avr/io.h>

#define F_CPU 1000000UL  // 1 MHz
#include <util/delay.h>


#define ADC_VREF_TYPE 0x00
volatile uint8_t string_msg[30];



void Init_MC(void){
// Input/Output Ports initialization
  // Port B initialization
  // Func7=In Func6=In Func5=In Func4=In Func3=In Func2=Out Func1=Out Func0=Out
  // State7=T State6=T State5=T State4=T State3=T State2=0 State1=0 State0=0
  PORTB=0x07;
  DDRB=0x07;

  // Port C initialization
  // Func6=In Func5=Out Func4=Out Func3=Out Func2=In Func1=In Func0=In
  // State6=T State5=1 State4=0 State3=0 State2=T State1=T State0=T
  PORTC=0x20;
  DDRC=0x38;

  // Port D initialization
  // Func7=Out Func6=Out Func5=Out Func4=Out Func3=Out Func2=In Func1=In Func0=In
  // State7=0 State6=0 State5=0 State4=0 State3=0 State2=T State1=T State0=T
  PORTD=0xF8;
  DDRD=0xF8;

  //for switch at PD2:
  PORTD |= (1<<PD2);    /* internal Pull-Up PD2 */


  // Timer/Counter 0 initialization
  // Clock source: System Clock
  // Clock value: Timer 0 Stopped
  TCCR0=0x00;
  TCNT0=0x00;

  // Timer/Counter 1 initialization
  // Clock source: System Clock
  // Clock value: Timer 1 Stopped
  // Mode: Normal top=FFFFh
  // OC1A output: Discon.
  // OC1B output: Discon.
  // Noise Canceler: Off
  // Input Capture on Falling Edge
  // Timer 1 Overflow Interrupt: Off
  // Input Capture Interrupt: Off
  // Compare A Match Interrupt: Off
  // Compare B Match Interrupt: Off
  TCCR1A=0x00;
  TCCR1B=0x00;
  TCNT1H=0x00;
  TCNT1L=0x00;
  ICR1H=0x00;
  ICR1L=0x00;
  OCR1AH=0x00;
  OCR1AL=0x00;
  OCR1BH=0x00;
  OCR1BL=0x00;

  // Timer/Counter 2 initialization
  // Clock source: System Clock
  // Clock value: Timer 2 Stopped
  // Mode: Normal top=FFh
  // OC2 output: Disconnected
  ASSR=0x00;
  TCCR2=0x00;
  TCNT2=0x00;
  OCR2=0x00;

  // External Interrupt(s) initialization
  // INT0: Off
  // INT1: Off
  MCUCR=0x00;

  // Timer(s)/Counter(s) Interrupt(s) initialization
  TIMSK=0x00;

  // USART initialization
  // Communication Parameters: 8 Data, 1 Stop, No Parity
  // USART Receiver: On
  // USART Transmitter: On
  // USART Mode: Asynchronous
  // USART Baud Rate: 4800
  UCSRA=0x00;
  UCSRB=0x18;
  UCSRC=0x86;
  UBRRH=0x00;
  UBRRL=0x0C;

  // Analog Comparator initialization
  // Analog Comparator: Off
  // Analog Comparator Input Capture by Timer/Counter 1: Off
  ACSR=0x80;
  SFIOR=0x00;

  // ADC initialization
  // ADC Clock frequency: 125,000 kHz
  // ADC Voltage Reference: AREF pin
  ADMUX=ADC_VREF_TYPE & 0xff;
  ADCSRA=0x83;
}

//controlls the Port-Channels that switch the LEDs
void LED_Ansteuerfunktion(uint8_t wert)
{
  uint8_t i=0;

  for(i=0; i<8; i++)
  {
    switch(i)
    {
       case 0: if( ((wert>>i)&0x01) )
	             {
                 PORTD &= ~ (1<<PD3);
			         }
			         else
                 PORTD |= (1<<PD3);
			         break;
       case 1: if( ((wert>>i)&0x01) )
			         {
                 PORTD &= ~ (1<<PD4);
			         }
			         else
                 PORTD |= (1<<PD4);
			         break;
       case 2: if( ((wert>>i)&0x01) )
			         {
                 PORTD &= ~ (1<<PD5);
			         }
			         else
                 PORTD |= (1<<PD5);
			         break;
       case 3: if( ((wert>>i)&0x01) )
			         {
                 PORTD &= ~ (1<<PD6);
			         }
			         else
                 PORTD |= (1<<PD6);
			         break;
       case 4: if( ((wert>>i)&0x01) )
			         {
                 PORTD &= ~ (1<<PD7);
			         }
			         else
                 PORTD |= (1<<PD7);
			         break;
       case 5: if( ((wert>>i)&0x01) )
			         {
                 PORTB &= ~ (1<<PB0);
			         }
			         else
                 PORTB |= (1<<PB0);
			         break;
       case 6: if( ((wert>>i)&0x01) )
			         {
                 PORTB &= ~ (1<<PB1);
			         }
			         else
                 PORTB |= (1<<PB1);
			         break;
       case 7: if( ((wert>>i)&0x01) )
			         {
                 PORTB &= ~ (1<<PB2);
			         }
			         else
                 PORTB |= (1<<PB2);
			         break;
    }
  }
}


//reads out the ADC
uint16_t adc(uint8_t admux)
{
    ADCSRA  =  (1<<ADEN)  | (1<<ADPS1) | (1<<ADPS0);
    ADMUX   =  admux;
    ADMUX  |=  (1<<REFS1) | (1<<REFS0);
    ADCSRA |=  (1<<ADSC);
    while      (ADCSRA    & (1<<ADSC));
    uint16_t val     = ADCW;
    ADCSRA &= ~(1<<ADEN);
    return val;
}

//##############################################




unsigned char Calc_LED_Val(unsigned short voltage)
{
  signed short g=0;
  signed short offest_x=50;

  unsigned char led=0;

  /*
  Steigung: 800mV/g
  Offset: 1,65V

  +1g: 2,45V
   0g: 1,65V
  -1g: 0,85V
  */

  //Rechnung normiert auf mV:
  //wir ziehen zu erst den Offset ab und teilen dann durch die Steigung:
  g= (signed short)( ((signed short)voltage+offest_x-1650)/8); //in 10mg

  /*
     ---oo---, g=0
	 --oo----, g=10
	 -oo-----, g=25
	 oo------, g=40
     ----oo--, g=-10
	 -----oo-, g=-25
	 ------oo, g=-40


  */
  if(g>40)
    led=0xC0;
  else if(g>25)
    led=0x60;
  else if(g>10)
    led=0x30;
  else if(g>-10)
    led=0x18;

  else if(g>-25)
    led=0x0C;
  else if(g>-40)
    led=0x06;
  else
    led=0x03;

/* //debug-uart
  sprintf(string_msg, "voltage: %d \r\n",voltage);
    uart_puts(string_msg);
  sprintf(string_msg, "LED: %d \r\n",led);
    uart_puts(string_msg);
  sprintf(string_msg, "g: %d \r\n",(signed int)g);
    uart_puts(string_msg);
*/
  return led;
}



int main(){


  unsigned short voltage_x=0;

  Init_MC();


  while(1)
  {

	voltage_x=( (unsigned int)( (float)(adc(2) )*3.223) ); //read from ADC-channel 2 -> x-axis Accelerometer

    LED_Ansteuerfunktion(Calc_LED_Val(voltage_x));

    _delay_ms(500);
  }

  return 0;

}
