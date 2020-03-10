package encryptions;

import java.util.Scanner;

public class EncryptionAlgMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a phone number: ");
		
		String number = scanner.nextLine();

		System.out.println("Using diffModEnc(), the encrypted phone number is: " + EncAlgorithms.diffModEnc(number));
		
		scanner.close();
	}


}
