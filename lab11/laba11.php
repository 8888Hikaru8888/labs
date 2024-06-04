<?php
        echo "      1 zad\n";  
        $var = 'hello';
        echo $var[0];  
        echo $var[1];  
        echo $var[4]; 

        echo "\n    2 zad\n";  
        $sInHour = 60 * 60;
        echo $sInHour;  

        echo "\n    3 zad\n"; 
        $var = 1;
        $var += 12;
        $var -= 14;
        $var *= 5;
        $var /= 7;
        $var++;
        $var--;
        echo $var;

        echo "\n    4 zad\n"; 
        $a = 3;
        echo $a; 

        echo "\n    5 zad\n"; 
        $a = 10;
        $b = 2;
        $sum =$a + $b;
        $diff = $a - $b;
        $pr= $a * $b;
        $qu = $a / $b;
        echo "Сумма: $sum\nРазность: $diff\nПроизведение: $pr\nЧастное: $qu";
        
        echo "\n    6 zad\n"; 
        $c = 15;
        $d = 2;
        $result = $c + $d;
        echo $result;  

        echo "\n    7 zad\n"; 
        $a = 10;
        $b = 2;
        echo $a + $b;  

        echo "\n    8 zad\n"; 
        $a = 17;
        $b = 10;
        $c =$a - $b;
        $d = 7;
        $result = $c + $d;
        echo $result;  

        echo "\n    9 zad\n"; 
        $text = 'Привет, Мир!';
        echo $text;  

        echo "\n    10 zad\n"; 
        $text1 = 'Привет, ';
        $text2 = 'Мир!';
        $text =$text1 . $text2;
        echo $text;  

        echo "\n    11 zad\n"; 
        $name = 'NIkita';
        echo "Привет, $name!";  

        echo "\n    12 zad\n"; 
        $age = 20;
        echo "Мне $age лет!";  

        echo "\n    13 zad\n"; 
        $text = 'abcde';
        echo $text[0];  
        echo $text[2];  
        echo $text[4];  

        echo "\n    14 zad\n";
        $text = 'abcde';
        $text[0] = '!';
        echo $text;  

        echo "\n    15 zad\n";
        $num = '12345';
        $sum = 0;
        for ($i = 0; $i < strlen($num); $i++) {
            $sum += intval($num[$i]);
        }
        echo $sum;

        echo "\n    16 zad\n";
        $sInHour = 60 * 60;
        $sInDay = $sInHour * 24;
        $sInMonth = $sInDay * 30;
        echo "Секунд в часе: $sInHour\nСекунд в дне: $sInDay\nСекунд в месяце: $sInMonth";

        echo "\n    17 zad\n";
        $hour = date("H");
        $minute = date("i");
        $second = date("s");
        echo "$hour:$minute:$second";  

        echo "\n    18 zad\n";
        $num = 89;
        $num = $num ** 2;
        echo $num;

        echo "\n    19 zad\n";
        $var = 47;
        $var += 7;
        $var -= 18;
        $var *= 10;
        $var /= 20;
        echo $var;

        echo "\n    20 zad\n";
        $text = 'Я';
        $text .= ' хочу';
        $text .= ' знать';
        $text .= ' PHP!';
        echo $text;

        echo "\n    21 zad\n";
        $var = 10;
        $var++;
        $var++;
        $var--;
        echo $var;

        echo "\n    22 zad\n";
        $var = 10;
        $var += 7;
        $var++;
        $var--;
        $var += 12;
        $var *= 7;
        $var -= 15;
        echo $var;
?>