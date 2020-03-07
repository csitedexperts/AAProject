package subsetSum;

import java.util.Scanner;

class EncAlg1{

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

public class EncryptionAlgorithmsMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a phone number: ");
		long number = scanner.nextLong();

		System.out.println("The phone number is " + EncAlg1.reverseANumber(number));

	}


}
