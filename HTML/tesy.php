<?php
chuong trinh

/**
 * 
 */
class Nguoi 
{
	public $toc;
	public $mat;
	public $chan;

	public function an()
	{
		echo 6;
	}

	public function ngu($value='')
	{
		# code...
	}
}

class HoA extends Nguoi
{
	public $ho = 'A';
	function __construct(argument)
	{
		# code...
	}

}
class HoB extends Nguoi
{
	public $ho = 'B';

	public function an()
	{
		echo 5;
	}

	function __construct(argument)
	{
		# code...
	}

}
/**
 * 
 */
class canhan extends HoA
{
	public $ten ;
	function __construct(argument)
	{
		# code...
	}
}

$ongC = new canhan();
$ongC->an(aa) = 'A';
$

?>
