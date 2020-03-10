package encryptions;

import java.util.Scanner;

public class EncryptionAlgMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a phone number: ");
		
		long number = scanner.nextLong();

		System.out.println("Using the reverseANumber() the phone number is " + EncAlgorithms.reverseANumber(number));

		System.out.println("Using the diffModEnc() The phone number is " + EncAlgorithms.diffModEnc(number));
		
	}


}
