package encryptions;

public class ReverseEnc{

	public static long reverseANumber(long number) {

		long lastDigit, reversedNumber = 0;

		do
		{
			lastDigit = number % 10;
			reversedNumber = (reversedNumber * 10) + lastDigit;
			number = number / 10;
		} while (number > 0); 

		return reversedNumber;

	}
}
