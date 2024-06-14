<?php
        echo "      1 zad\n";  
        $nums = range(1, 100);
        $sum = array_sum($nums);
        echo $sum;

        echo "\n    2 zad\n";  
        $letters = ['a', 'b', 'c', 'd', 'e'];
        $cap = array_map('strtoupper', $letters);
        print_r($cap);

        echo "\n    3 zad\n"; 
        $arr = [1,1,1,1,1,1,1,1,1,1,1,1,1];
        $count = count($arr);
        echo $count;

        echo "\n    4 zad\n"; 
        $last = $arr[count($arr)-1];
        echo $last;

        echo "\n    5 zad\n"; 
        $numbers = [1, 2, 3, 4, 5];
        if (in_array(3, $numbers)) {
            echo 'yes';
        } else {
            echo 'not';
        }
        
        echo "\n    6 zad\n"; 
        $n = [1, 2, 3, 4, 5];
        $sum = array_sum($n);
        echo $sum;

        echo "\n    7 zad\n"; 
        $n = [1, 2, 3, 4, 5];
        $p = array_product($n);
        echo $p;

        echo "\n    8 zad\n"; 
        $av = array_sum($arr) / count($arr);
        echo $av;

        echo "\n    9 zad\n"; 
        $arr = range(1, 100);
        print_r($arr);

        echo "\n    10 zad\n"; 
        $arr = range('a', 'z');
        print_r($arr);

        echo "\n    11 zad\n"; 
        $s = implode('-', range(1, 9));
        echo $s;

        echo "\n    12 zad\n"; 
        $sum = array_sum(range(1, 100));
        echo $sum;

        echo "\n    13 zad\n"; 
        $pr = array_product(range(1, 10));
        echo $pr;

        echo "\n    14 zad\n";
        $arr1 = [1, 2, 3];
        $arr2 = ['a', 'b', 'c'];
        $arr12 = array_merge($arr1, $arr2);
        print_r($arr12);

        echo "\n    15 zad\n";
        $arr = [1, 2, 3, 4, 5];
        $res = array_slice($arr, 1, 3);
        print_r($res);

        echo "\n    16 zad\n";
        $arr = [1, 2, 3, 4, 5];
        array_splice($arr, 1, 2);
        print_r($arr);

        echo "\n    17 zad\n";
        $arr = [1, 2, 3, 4, 5];
        $new_arr = array_splice($arr, 1, 3);
        print_r($new_arr);

        echo "\n    18 zad\n";
        $arr = [1, 2, 3, 4, 5];
        array_splice($arr, 3, 0, ['a', 'b', 'c']);
        print_r($arr);

        echo "\n    19 zad\n";
        $arr = [1, 2, 3, 4, 5];
        array_splice($arr, 1, 0, ['a', 'b']);
        array_splice($arr, 5, 0, ['c']);
        array_splice($arr, 8, 0, ['e']);
        print_r($arr);

        echo "\n    20 zad\n";
        $arr = ['a' => 1, 'b' => 2, 'c' => 3];
        $keys = array_keys($arr);
        $values = array_values($arr);
        print_r($keys);
        print_r($values);

        echo "\n    21 zad\n";
        $keys = ['a', 'b', 'c'];
        $values = [1, 2, 3];
        $new_arr = array_combine($keys, $values);
        print_r($new_arr);

        echo "\n    22 zad\n";
        $arr = ['a' => 1, 'b' => 2, 'c' => 3];
        $arr = array_flip($arr);
        print_r($arr);

        echo "\n    23 zad\n";
        $arr = [1, 2, 3, 4, 5];
        $rev_arr = array_reverse($arr);
        print_r($rev_arr);

        echo "\n    24 zad\n";
        $arr = ['a', '-', 'b', '-', 'c', '-', 'd'];
        $pos = array_search('-', $arr);
        echo $pos;

        echo "\n    25 zad\n";
        $arr = ['a', '-', 'b', '-', 'c', '-', 'd'];
        $pos = array_search('-', $arr);
        if ($pos != false) {
            array_splice($arr, $pos, 1);
        }
        print_r($arr);

        echo "\n    26 zad\n";
        $arr = ['a', 'b', 'c', 'd', 'e'];
        $arr[0] = '!';
        $arr[3] = '!!';
        print_r($arr);

        echo "\n    27 zad\n";
        $arr = ['3' => 'a', '1' => 'c', '2' => 'e', '4' => 'b'];
        echo "Сортировка по ключам в возрастающем порядке\n";
        ksort($arr);
        print_r($arr);
        echo "\nСортировка по ключам в убывающем порядке\n";
        krsort($arr);
        print_r($arr);
        echo "Сортировка по значениям в возрастающем порядке\n";
        asort($arr);
        print_r($arr);
        echo "\nСортировка по значениям в убывающем порядке\n";
        arsort($arr);
        print_r($arr);

        echo "\n    28 zad\n";
        $arr = ['a' => 1, 'b' => 2, 'c' => 3];
        $ran_key = array_rand($arr);
        echo $ran_key;

        echo "\n    29 zad\n";
        $arr = ['a' => 1, 'b' => 2, 'c' => 3];
        $ran_el = $arr[array_rand($arr)];
        echo $ran_el;

        echo "\n    30 zad\n";
        $arr = [1,11,14,144,133,190,122,1000,551,221,1351,331,5531];
        shuffle($arr);
        print_r($arr);

        echo "\n    31 zad\n";
        $arr = range(1, 25);
        shuffle($arr);
        print_r($arr);

        echo "\n    32 zad\n";
        $arr = range('a', 'z');
        shuffle($arr);
        print_r($arr);

        echo "\n    33 zad\n";
        $arr = range('a', 'z');
        shuffle($arr);
        $s = implode('', array_slice($arr, 0, 6));
        echo $s;

        echo "\n    34 zad\n";
        $arr = ['a', 'b', 'c', 'b', 'a'];
        $uarr = array_unique($arr);
        print_r($uarr);

        echo "\n    35 zad\n";
        $arr = [1, 2, 3, 4, 5];
        $first_el = array_shift($arr);
        $last_el = array_pop($arr);
        echo $first_el . '    ' . $last_el;

        echo "\n    36 zad\n";
        $arr = [1, 2, 3, 4, 5];
        array_unshift($arr, 0);
        array_push($arr, 6);
        print_r($arr);

        echo "\n    37 zad\n";
        $arr = [1, 2, 3, 4, 5, 6, 7, 8];
        $res = '';
        while (!empty($arr)) {
            $res .= array_shift($arr) . array_pop($arr);
        }
        echo $res;

        echo "\n    38 zad\n";
        $arr = ['a', 'b', 'c'];
        $ara_ara = array_merge($arr, array_fill(0, 3, '-'));
        print_r($ara_ara);

        echo "\n    39 zad\n";
        $arr = array_fill(0, 10, 'x');
        print_r($arr);

        echo "\n    40 zad\n";
        $arr = range(1, 20);
        $sub_arr = array_chunk($arr, 4);
        print_r($sub_arr);
?>