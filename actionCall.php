<?php
if(isset($_POST['name']) && isset($_POST['phonenumber']) && isset($_POST['email']))  {

    $to = 'benefit0712@tut.by'; //Почта получателя
    $subject = 'Обратный звонок!';
    $message =      $subject."\n".
                    'Имя: '.$_POST['name']."\n".
                    'Телефон: '.$_POST['phonenumber']."\n".
                    'Email: '.$_POST['email'];
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        // $headers .= "From: Отправитель <mail@vlide.by>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message); //$headers);
        // exit('<meta http-equiv="refresh" content="0; url=index.php" />');
        echo "Заявка на звонок отправлена";
}
?>