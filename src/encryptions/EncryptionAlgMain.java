package encryptions;

import java.util.Scanner;

public class EncryptionAlgMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a phone number: ");
		long number = scanner.nextLong();

		System.out.println("The phone number is " + ReverseEnc.reverseANumber(number));

	}


}
