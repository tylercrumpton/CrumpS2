EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L RF_Module:ESP32-S2-WROVER U1
U 1 1 603F2901
P 3950 3250
F 0 "U1" H 3550 4450 50  0000 C CNN
F 1 "ESP32-S2-WROVER" H 4450 4450 50  0000 C CNN
F 2 "RF_Module:ESP32-S2-WROVER" H 4700 2100 50  0001 C CNN
F 3 "https://www.espressif.com/sites/default/files/documentation/esp32-s2-wroom_esp32-s2-wroom-i_datasheet_en.pdf" H 3650 2450 50  0001 C CNN
	1    3950 3250
	1    0    0    -1  
$EndComp
$Comp
L Device:R R2
U 1 1 603FD598
P 8700 2500
F 0 "R2" H 8630 2453 50  0000 R CNN
F 1 "5.1k" H 8630 2546 50  0000 R CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder" V 8630 2500 50  0001 C CNN
F 3 "~" H 8700 2500 50  0001 C CNN
	1    8700 2500
	-1   0    0    1   
$EndComp
$Comp
L Device:R R3
U 1 1 603FFF7A
P 9000 2500
F 0 "R3" H 9070 2547 50  0000 L CNN
F 1 "5.1k" H 9070 2454 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder" V 8930 2500 50  0001 C CNN
F 3 "~" H 9000 2500 50  0001 C CNN
	1    9000 2500
	1    0    0    -1  
$EndComp
Wire Wire Line
	7950 2200 9000 2200
Wire Wire Line
	9000 2200 9000 2350
Wire Wire Line
	8700 2300 8700 2350
Wire Wire Line
	7950 2300 8700 2300
$Comp
L power:GND #PWR04
U 1 1 60400DC1
P 8850 2750
F 0 "#PWR04" H 8850 2500 50  0001 C CNN
F 1 "GND" H 8855 2569 50  0000 C CNN
F 2 "" H 8850 2750 50  0001 C CNN
F 3 "" H 8850 2750 50  0001 C CNN
	1    8850 2750
	1    0    0    -1  
$EndComp
Wire Wire Line
	8700 2650 8700 2700
Wire Wire Line
	8700 2700 8850 2700
Wire Wire Line
	8850 2700 8850 2750
Wire Wire Line
	8850 2700 9000 2700
Wire Wire Line
	9000 2700 9000 2650
Connection ~ 8850 2700
Wire Wire Line
	7950 2600 8000 2600
Wire Wire Line
	8000 2500 7950 2500
Wire Wire Line
	7950 2800 8000 2800
Wire Wire Line
	8000 2700 7950 2700
NoConn ~ 7950 3000
NoConn ~ 7950 3100
NoConn ~ 7950 3300
NoConn ~ 7950 3400
NoConn ~ 7950 3600
NoConn ~ 7950 3700
NoConn ~ 7950 3900
NoConn ~ 7950 4000
NoConn ~ 7950 4200
NoConn ~ 7950 4300
NoConn ~ 7050 4600
$Comp
L power:GND #PWR07
U 1 1 60410275
P 7350 4700
F 0 "#PWR07" H 7350 4450 50  0001 C CNN
F 1 "GND" H 7355 4519 50  0000 C CNN
F 2 "" H 7350 4700 50  0001 C CNN
F 3 "" H 7350 4700 50  0001 C CNN
	1    7350 4700
	1    0    0    -1  
$EndComp
Wire Wire Line
	7350 4700 7350 4650
Wire Wire Line
	7950 2000 8100 2000
Text Label 8350 2500 2    50   ~ 0
USB_D-
Text Label 8350 2700 2    50   ~ 0
USB_D+
Wire Wire Line
	8000 2700 8350 2700
Connection ~ 8000 2700
Wire Wire Line
	8000 2500 8350 2500
Connection ~ 8000 2500
$Comp
L Device:D_Schottky D1
U 1 1 60418889
P 8250 2000
F 0 "D1" H 8250 1780 50  0000 C CNN
F 1 "D_Schottky" H 8250 1873 50  0000 C CNN
F 2 "Diode_SMD:D_0603_1608Metric_Pad1.05x0.95mm_HandSolder" H 8250 2000 50  0001 C CNN
F 3 "~" H 8250 2000 50  0001 C CNN
	1    8250 2000
	-1   0    0    1   
$EndComp
$Comp
L power:+5V #PWR02
U 1 1 6041A62F
P 8700 1900
F 0 "#PWR02" H 8700 1750 50  0001 C CNN
F 1 "+5V" H 8715 2081 50  0000 C CNN
F 2 "" H 8700 1900 50  0001 C CNN
F 3 "" H 8700 1900 50  0001 C CNN
	1    8700 1900
	1    0    0    -1  
$EndComp
Wire Wire Line
	8400 2000 8700 2000
Wire Wire Line
	8700 2000 8700 1900
Text Notes 7800 1700 0    50   ~ 0
For backfeed protection\nDrops 0.34V
Text Notes 9350 2600 0    50   ~ 0
These resistors indicate that \nthis is USB-C ???Device??? that \nreceives power.
Text Label 4950 3950 2    50   ~ 0
USB_D-
Text Label 4950 3850 2    50   ~ 0
USB_D+
Wire Wire Line
	4550 3850 4950 3850
Wire Wire Line
	4550 3950 4950 3950
$Comp
L Switch:SW_Push SW1
U 1 1 60D02421
P 1550 2450
F 0 "SW1" H 1550 2745 50  0000 C CNN
F 1 "BOOT SEL Switch" H 1550 2652 50  0000 C CNN
F 2 "_CrumpPrints:SW_Push_1P1T_NO_CK_RKB2" H 1550 2650 50  0001 C CNN
F 3 "~" H 1550 2650 50  0001 C CNN
	1    1550 2450
	1    0    0    -1  
$EndComp
Text Label 3100 2350 0    50   ~ 0
IO00
Wire Wire Line
	3350 2350 3100 2350
Text Label 1100 2450 0    50   ~ 0
IO00
Wire Wire Line
	1350 2450 1100 2450
Wire Wire Line
	1750 2450 1850 2450
$Comp
L power:GND #PWR03
U 1 1 60D04958
P 1850 2550
F 0 "#PWR03" H 1850 2300 50  0001 C CNN
F 1 "GND" H 1855 2369 50  0000 C CNN
F 2 "" H 1850 2550 50  0001 C CNN
F 3 "" H 1850 2550 50  0001 C CNN
	1    1850 2550
	1    0    0    -1  
$EndComp
Wire Wire Line
	1850 2550 1850 2450
$Comp
L Switch:SW_Push SW2
U 1 1 60D05030
P 1550 3300
F 0 "SW2" H 1550 3595 50  0000 C CNN
F 1 "RESET Switch" H 1550 3502 50  0000 C CNN
F 2 "_CrumpPrints:SW_Push_1P1T_NO_CK_RKB2" H 1550 3500 50  0001 C CNN
F 3 "~" H 1550 3500 50  0001 C CNN
	1    1550 3300
	1    0    0    -1  
$EndComp
Text Label 1100 3300 0    50   ~ 0
EN
Wire Wire Line
	1350 3300 1100 3300
Wire Wire Line
	1750 3300 1850 3300
$Comp
L power:GND #PWR05
U 1 1 60D0504F
P 1850 3400
F 0 "#PWR05" H 1850 3150 50  0001 C CNN
F 1 "GND" H 1855 3219 50  0000 C CNN
F 2 "" H 1850 3400 50  0001 C CNN
F 3 "" H 1850 3400 50  0001 C CNN
	1    1850 3400
	1    0    0    -1  
$EndComp
Wire Wire Line
	1850 3400 1850 3300
Text Label 2800 2250 0    50   ~ 0
EN
$Comp
L power:+3V3 #PWR01
U 1 1 60D087A5
P 3000 1800
F 0 "#PWR01" H 3000 1650 50  0001 C CNN
F 1 "+3V3" H 3015 1981 50  0000 C CNN
F 2 "" H 3000 1800 50  0001 C CNN
F 3 "" H 3000 1800 50  0001 C CNN
	1    3000 1800
	1    0    0    -1  
$EndComp
$Comp
L Device:R R1
U 1 1 60D09D16
P 3000 2050
F 0 "R1" H 3070 2097 50  0000 L CNN
F 1 "100k" H 3070 2004 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder" V 2930 2050 50  0001 C CNN
F 3 "~" H 3000 2050 50  0001 C CNN
	1    3000 2050
	1    0    0    -1  
$EndComp
Wire Wire Line
	3000 1900 3000 1850
Wire Wire Line
	2800 2250 3000 2250
Wire Wire Line
	3000 2250 3000 2200
Connection ~ 3000 2250
Wire Wire Line
	3000 2250 3350 2250
Text Notes 1700 1650 0    50   ~ 0
TODO:\n- Pin wireup\n- RGB LED
$Comp
L power:GND #PWR06
U 1 1 60D0F56C
P 3950 4450
F 0 "#PWR06" H 3950 4200 50  0001 C CNN
F 1 "GND" H 3955 4269 50  0000 C CNN
F 2 "" H 3950 4450 50  0001 C CNN
F 3 "" H 3950 4450 50  0001 C CNN
	1    3950 4450
	1    0    0    -1  
$EndComp
Wire Wire Line
	3950 4450 3950 4350
$Comp
L Regulator_Linear:LM1117-3.3 U2
U 1 1 60D4D853
P 2150 5750
F 0 "U2" H 2150 5995 50  0000 C CNN
F 1 "LM1117-3.3" H 2150 5902 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-223-3_TabPin2" H 2150 5750 50  0001 C CNN
F 3 "http://www.ti.com/lit/ds/symlink/lm1117.pdf" H 2150 5750 50  0001 C CNN
	1    2150 5750
	1    0    0    -1  
$EndComp
$Comp
L Device:CP1 C2
U 1 1 60D5070B
P 2600 6000
F 0 "C2" H 2715 6047 50  0000 L CNN
F 1 "10uF Tantalum" H 2715 5954 50  0000 L CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-2012-12_Kemet-R_Pad1.30x1.05mm_HandSolder" H 2600 6000 50  0001 C CNN
F 3 "~" H 2600 6000 50  0001 C CNN
	1    2600 6000
	1    0    0    -1  
$EndComp
Wire Wire Line
	2600 5850 2600 5750
Wire Wire Line
	2600 5750 2450 5750
$Comp
L Device:CP1 C1
U 1 1 60D51C5C
P 1650 6000
F 0 "C1" H 1400 6050 50  0000 L CNN
F 1 "10uF Tantalum" H 950 5950 50  0000 L CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-2012-12_Kemet-R_Pad1.30x1.05mm_HandSolder" H 1650 6000 50  0001 C CNN
F 3 "~" H 1650 6000 50  0001 C CNN
	1    1650 6000
	1    0    0    -1  
$EndComp
Wire Wire Line
	1650 5850 1650 5750
Wire Wire Line
	1650 5750 1850 5750
$Comp
L power:GND #PWR010
U 1 1 60D53958
P 2150 6400
F 0 "#PWR010" H 2150 6150 50  0001 C CNN
F 1 "GND" H 2155 6219 50  0000 C CNN
F 2 "" H 2150 6400 50  0001 C CNN
F 3 "" H 2150 6400 50  0001 C CNN
	1    2150 6400
	1    0    0    -1  
$EndComp
Wire Wire Line
	1650 6150 1650 6250
Wire Wire Line
	1650 6250 2150 6250
Wire Wire Line
	2600 6250 2600 6150
Wire Wire Line
	2150 6050 2150 6250
Connection ~ 2150 6250
Wire Wire Line
	2150 6250 2600 6250
Wire Wire Line
	2150 6400 2150 6250
$Comp
L power:+5V #PWR08
U 1 1 60D561FE
P 1350 5650
F 0 "#PWR08" H 1350 5500 50  0001 C CNN
F 1 "+5V" H 1365 5831 50  0000 C CNN
F 2 "" H 1350 5650 50  0001 C CNN
F 3 "" H 1350 5650 50  0001 C CNN
	1    1350 5650
	1    0    0    -1  
$EndComp
Wire Wire Line
	1650 5750 1350 5750
Wire Wire Line
	1350 5750 1350 5650
Connection ~ 1650 5750
$Comp
L power:+3V3 #PWR09
U 1 1 60D58CAF
P 2950 5650
F 0 "#PWR09" H 2950 5500 50  0001 C CNN
F 1 "+3V3" H 2965 5831 50  0000 C CNN
F 2 "" H 2950 5650 50  0001 C CNN
F 3 "" H 2950 5650 50  0001 C CNN
	1    2950 5650
	1    0    0    -1  
$EndComp
Wire Wire Line
	2600 5750 2950 5750
Wire Wire Line
	2950 5750 2950 5650
Connection ~ 2600 5750
Text Label 3100 2450 0    50   ~ 0
IO01
Wire Wire Line
	3350 2450 3100 2450
Text Label 3100 2550 0    50   ~ 0
IO02
Wire Wire Line
	3350 2550 3100 2550
Text Label 3100 2650 0    50   ~ 0
IO03
Wire Wire Line
	3350 2650 3100 2650
Text Label 3100 2750 0    50   ~ 0
IO04
Wire Wire Line
	3350 2750 3100 2750
Text Label 3100 2850 0    50   ~ 0
IO05
Wire Wire Line
	3350 2850 3100 2850
Text Label 3100 2950 0    50   ~ 0
IO06
Wire Wire Line
	3350 2950 3100 2950
Text Label 3100 3050 0    50   ~ 0
IO07
Wire Wire Line
	3350 3050 3100 3050
Text Label 3100 3150 0    50   ~ 0
IO08
Wire Wire Line
	3350 3150 3100 3150
Text Label 3100 3250 0    50   ~ 0
IO09
Wire Wire Line
	3350 3250 3100 3250
Text Label 3100 3350 0    50   ~ 0
IO10
Wire Wire Line
	3350 3350 3100 3350
Text Label 3100 3450 0    50   ~ 0
IO11
Wire Wire Line
	3350 3450 3100 3450
Text Label 3100 3550 0    50   ~ 0
IO12
Wire Wire Line
	3350 3550 3100 3550
Text Label 3100 3650 0    50   ~ 0
IO13
Wire Wire Line
	3350 3650 3100 3650
Text Label 3100 3750 0    50   ~ 0
IO14
Wire Wire Line
	3350 3750 3100 3750
Text Label 3100 3850 0    50   ~ 0
IO15
Wire Wire Line
	3350 3850 3100 3850
Text Label 3100 3950 0    50   ~ 0
IO16
Wire Wire Line
	3350 3950 3100 3950
Text Label 3100 4050 0    50   ~ 0
IO17
Wire Wire Line
	3350 4050 3100 4050
Text Label 3100 4150 0    50   ~ 0
IO18
Wire Wire Line
	3350 4150 3100 4150
Text Label 4800 2250 2    50   ~ 0
IO46
Wire Wire Line
	4550 2250 4800 2250
Text Label 4800 2350 2    50   ~ 0
IO45
Wire Wire Line
	4550 2350 4800 2350
Wire Wire Line
	4550 2450 4800 2450
Text Label 4800 2550 2    50   ~ 0
TX
Wire Wire Line
	4550 2550 4800 2550
Text Label 4800 2650 2    50   ~ 0
IO42
Wire Wire Line
	4550 2650 4800 2650
Text Label 4800 2750 2    50   ~ 0
IO41
Wire Wire Line
	4550 2750 4800 2750
Text Label 4800 2850 2    50   ~ 0
IO40
Wire Wire Line
	4550 2850 4800 2850
Text Label 4800 2950 2    50   ~ 0
IO39
Wire Wire Line
	4550 2950 4800 2950
Text Label 4800 3050 2    50   ~ 0
IO38
Wire Wire Line
	4550 3050 4800 3050
Text Label 4800 3150 2    50   ~ 0
IO37
Wire Wire Line
	4550 3150 4800 3150
Text Label 4800 3250 2    50   ~ 0
IO36
Wire Wire Line
	4550 3250 4800 3250
Text Label 4800 3350 2    50   ~ 0
IO35
Wire Wire Line
	4550 3350 4800 3350
Text Label 4800 3450 2    50   ~ 0
IO34
Wire Wire Line
	4550 3450 4800 3450
Text Label 4800 3550 2    50   ~ 0
IO33
Wire Wire Line
	4550 3550 4800 3550
Text Label 4800 3650 2    50   ~ 0
IO26
Wire Wire Line
	4550 3650 4800 3650
Text Label 4800 3750 2    50   ~ 0
IO21
Wire Wire Line
	4550 3750 4800 3750
Text Label 4800 2450 2    50   ~ 0
RX
$Comp
L LED:APA102 D2
U 1 1 60D7D3F5
P 5200 5900
F 0 "D2" H 5000 6150 50  0000 C CNN
F 1 "APA102" H 5400 6150 50  0000 C CNN
F 2 "LED_SMD:LED_RGB_5050-6" H 5250 5600 50  0001 L TNN
F 3 "http://www.led-color.com/upload/201506/APA102%20LED.pdf" H 5300 5525 50  0001 L TNN
	1    5200 5900
	1    0    0    -1  
$EndComp
Text Label 4650 5800 0    50   ~ 0
IO40
Wire Wire Line
	4900 5800 4650 5800
Text Label 4650 5900 0    50   ~ 0
IO45
Wire Wire Line
	4900 5900 4650 5900
$Comp
L power:GND #PWR012
U 1 1 60D84161
P 5200 6250
F 0 "#PWR012" H 5200 6000 50  0001 C CNN
F 1 "GND" H 5205 6069 50  0000 C CNN
F 2 "" H 5200 6250 50  0001 C CNN
F 3 "" H 5200 6250 50  0001 C CNN
	1    5200 6250
	1    0    0    -1  
$EndComp
Wire Wire Line
	5200 6250 5200 6200
$Comp
L power:+5V #PWR011
U 1 1 60D87699
P 5200 5550
F 0 "#PWR011" H 5200 5400 50  0001 C CNN
F 1 "+5V" H 5215 5731 50  0000 C CNN
F 2 "" H 5200 5550 50  0001 C CNN
F 3 "" H 5200 5550 50  0001 C CNN
	1    5200 5550
	1    0    0    -1  
$EndComp
Wire Wire Line
	5200 5600 5200 5550
NoConn ~ 5500 5800
NoConn ~ 5500 5900
Wire Wire Line
	3950 2050 3950 1850
Wire Wire Line
	3950 1850 3000 1850
Connection ~ 3000 1850
Wire Wire Line
	3000 1850 3000 1800
$Comp
L power:PWR_FLAG #FLG0101
U 1 1 60D98F9E
P 8950 2000
F 0 "#FLG0101" H 8950 2075 50  0001 C CNN
F 1 "PWR_FLAG" H 8950 2181 50  0000 C CNN
F 2 "" H 8950 2000 50  0001 C CNN
F 3 "~" H 8950 2000 50  0001 C CNN
	1    8950 2000
	1    0    0    -1  
$EndComp
Wire Wire Line
	8700 2000 8950 2000
Connection ~ 8700 2000
Wire Wire Line
	8000 2800 8000 2700
Wire Wire Line
	8000 2600 8000 2500
$Comp
L Connector:USB_C_Receptacle J1
U 1 1 603FA467
P 7350 3000
F 0 "J1" H 7460 4270 50  0000 C CNN
F 1 "USB_C_Receptacle" H 7460 4177 50  0000 C CNN
F 2 "Connector_USB:USB_C_Receptacle_GCT_USB4085" H 7500 3000 50  0001 C CNN
F 3 "https://www.usb.org/sites/default/files/documents/usb_type-c.zip" H 7500 3000 50  0001 C CNN
	1    7350 3000
	1    0    0    -1  
$EndComp
$Comp
L power:PWR_FLAG #FLG0102
U 1 1 60DC8707
P 7650 4600
F 0 "#FLG0102" H 7650 4675 50  0001 C CNN
F 1 "PWR_FLAG" H 7650 4781 50  0000 C CNN
F 2 "" H 7650 4600 50  0001 C CNN
F 3 "~" H 7650 4600 50  0001 C CNN
	1    7650 4600
	1    0    0    -1  
$EndComp
Wire Wire Line
	7350 4650 7650 4650
Wire Wire Line
	7650 4650 7650 4600
Connection ~ 7350 4650
Wire Wire Line
	7350 4650 7350 4600
Text Label 8550 4300 0    50   ~ 0
IO00
Wire Wire Line
	8800 4300 8550 4300
Text Label 8550 4400 0    50   ~ 0
IO01
Wire Wire Line
	8800 4400 8550 4400
Text Label 8550 4500 0    50   ~ 0
IO02
Wire Wire Line
	8800 4500 8550 4500
Text Label 8550 4600 0    50   ~ 0
IO03
Wire Wire Line
	8800 4600 8550 4600
Text Label 8550 4700 0    50   ~ 0
IO04
Wire Wire Line
	8800 4700 8550 4700
Text Label 8550 4800 0    50   ~ 0
IO05
Wire Wire Line
	8800 4800 8550 4800
Text Label 8550 4900 0    50   ~ 0
IO06
Wire Wire Line
	8800 4900 8550 4900
Text Label 8550 5000 0    50   ~ 0
IO07
Wire Wire Line
	8800 5000 8550 5000
Text Label 8550 5100 0    50   ~ 0
IO08
Wire Wire Line
	8800 5100 8550 5100
Text Label 8550 5200 0    50   ~ 0
IO09
Wire Wire Line
	8800 5200 8550 5200
Text Label 8550 5300 0    50   ~ 0
IO10
Wire Wire Line
	8800 5300 8550 5300
Text Label 8550 5400 0    50   ~ 0
IO11
Wire Wire Line
	8800 5400 8550 5400
Text Label 8550 5500 0    50   ~ 0
IO12
Wire Wire Line
	8800 5500 8550 5500
Text Label 8550 5600 0    50   ~ 0
IO13
Wire Wire Line
	8800 5600 8550 5600
Text Label 8550 5700 0    50   ~ 0
IO14
Wire Wire Line
	8800 5700 8550 5700
Text Label 8550 5800 0    50   ~ 0
IO15
Wire Wire Line
	8800 5800 8550 5800
Text Label 8550 5900 0    50   ~ 0
IO16
Wire Wire Line
	8800 5900 8550 5900
Text Label 9750 5800 0    50   ~ 0
IO17
Wire Wire Line
	10000 5700 9750 5700
Text Label 9750 5700 0    50   ~ 0
IO18
Wire Wire Line
	10000 5800 9750 5800
Text Label 9750 4300 0    50   ~ 0
IO46
Wire Wire Line
	9750 4300 10000 4300
Wire Wire Line
	9750 4400 10000 4400
Text Label 9750 4500 0    50   ~ 0
TX
Wire Wire Line
	9750 4500 10000 4500
Text Label 9750 4600 0    50   ~ 0
IO42
Wire Wire Line
	9750 4600 10000 4600
Text Label 9750 4700 0    50   ~ 0
IO41
Wire Wire Line
	9750 4700 10000 4700
Text Label 9750 4800 0    50   ~ 0
IO39
Wire Wire Line
	9750 4800 10000 4800
Text Label 9750 4900 0    50   ~ 0
IO38
Wire Wire Line
	9750 4900 10000 4900
Text Label 9750 5000 0    50   ~ 0
IO37
Wire Wire Line
	9750 5000 10000 5000
Text Label 9750 5100 0    50   ~ 0
IO36
Wire Wire Line
	9750 5100 10000 5100
Text Label 9750 5200 0    50   ~ 0
IO35
Wire Wire Line
	9750 5200 10000 5200
Text Label 9750 5300 0    50   ~ 0
IO34
Wire Wire Line
	9750 5300 10000 5300
Text Label 9750 5400 0    50   ~ 0
IO33
Wire Wire Line
	9750 5400 10000 5400
Text Label 9750 5500 0    50   ~ 0
IO26
Wire Wire Line
	9750 5500 10000 5500
Text Label 9750 5600 0    50   ~ 0
IO21
Wire Wire Line
	9750 5600 10000 5600
Text Label 9750 4400 0    50   ~ 0
RX
$Comp
L Connector_Generic:Conn_01x18 J2
U 1 1 60E1208C
P 9000 5100
F 0 "J2" H 9080 5090 50  0000 L CNN
F 1 "Conn_01x18" H 9080 4997 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x18_P2.54mm_Vertical" H 9000 5100 50  0001 C CNN
F 3 "~" H 9000 5100 50  0001 C CNN
	1    9000 5100
	1    0    0    -1  
$EndComp
$Comp
L Connector_Generic:Conn_01x18 J3
U 1 1 60E13F66
P 10200 5100
F 0 "J3" H 10280 5090 50  0000 L CNN
F 1 "Conn_01x18" H 10280 4997 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x18_P2.54mm_Vertical" H 10200 5100 50  0001 C CNN
F 3 "~" H 10200 5100 50  0001 C CNN
	1    10200 5100
	1    0    0    -1  
$EndComp
$Comp
L power:+5V #PWR0101
U 1 1 60E2363F
P 8300 5900
F 0 "#PWR0101" H 8300 5750 50  0001 C CNN
F 1 "+5V" H 8315 6081 50  0000 C CNN
F 2 "" H 8300 5900 50  0001 C CNN
F 3 "" H 8300 5900 50  0001 C CNN
	1    8300 5900
	1    0    0    -1  
$EndComp
Wire Wire Line
	8800 6000 8300 6000
Wire Wire Line
	8300 6000 8300 5900
$Comp
L power:+3V3 #PWR0102
U 1 1 60E371F0
P 9500 5900
F 0 "#PWR0102" H 9500 5750 50  0001 C CNN
F 1 "+3V3" H 9515 6081 50  0000 C CNN
F 2 "" H 9500 5900 50  0001 C CNN
F 3 "" H 9500 5900 50  0001 C CNN
	1    9500 5900
	1    0    0    -1  
$EndComp
Wire Wire Line
	10000 5900 9500 5900
$Comp
L power:GND #PWR0103
U 1 1 60E41D12
P 9500 6100
F 0 "#PWR0103" H 9500 5850 50  0001 C CNN
F 1 "GND" H 9505 5919 50  0000 C CNN
F 2 "" H 9500 6100 50  0001 C CNN
F 3 "" H 9500 6100 50  0001 C CNN
	1    9500 6100
	1    0    0    -1  
$EndComp
Wire Wire Line
	10000 6000 9500 6000
Wire Wire Line
	9500 6000 9500 6100
$EndSCHEMATC
