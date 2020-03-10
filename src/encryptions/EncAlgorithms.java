package encryptions;

public class EncAlgorithms{


	public static String diffModEnc(String phNumber) {

		int[] diffArray = new int[9];
		int sumDiff = 0;
		
		System.out.print("Digits differences are: ");
		
		for (int i = 0; i< phNumber.length()-1; i++)
		{

			diffArray[i] = phNumber.charAt(i+1) - phNumber.charAt(i);
			System.out.print(diffArray[i] + " ");
			sumDiff += diffArray[i]; 
		}

		System.out.println("\nSum of the digit differences is: " + Math.abs(sumDiff));
		int addTo = Math.abs(sumDiff);

		String diffModEncNumber = "";
		for (int i = 0; i< phNumber.length(); i++)
		{
			diffModEncNumber += ((Character.getNumericValue(phNumber.charAt(i)) + addTo) % 10);

		}
		return diffModEncNumber;

	}
}
