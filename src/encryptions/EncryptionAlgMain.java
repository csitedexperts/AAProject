package encryptions;

import java.util.Scanner;

public class EncryptionAlgMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		String number = "", flag = "000";
		while (!number.equals(flag)){
			System.out.print("Enter a phone number [000 to exit]: ");
			number = scanner.nextLine();
			if (number.equals(flag)) 
				return;
			else

				System.out.println("Using diffModEnc(), the encrypted phone number is: " + EncAlgorithms.diffModEnc(number));
		}
		scanner.close();
	}


}
