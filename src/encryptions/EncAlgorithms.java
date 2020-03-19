package encryptions;

public class EncAlgorithms{


	public static String diffModEnc(String phNumber) {

		int[] diffArray = new int[100];
		int sumDiff = 0;
		
		System.out.print("Digits differences are: ");
		
		for (int i = 0; i< phNumber.length()-1; i++)
		{

			diffArray[i] = phNumber.charAt(i+1) - phNumber.charAt(i);
			System.out.print(diffArray[i] + " ");
			sumDiff += diffArray[i]; 
		}

		System.out.println("\nSum of the absolute digit differences is: " + Math.abs(sumDiff));
		int addTo = Math.abs(sumDiff);

		String diffModEncNumber = "";
		for (int i = 0; i< phNumber.length(); i++)
		{
			diffModEncNumber += ((Character.getNumericValue(phNumber.charAt(i)) + addTo) % 10);

		}
		return diffModEncNumber;

	}


	public static String diffModDec(String phNumber) {

		phNumber = diffModEnc(phNumber);
		
		int[] diffArray = new int[100];
		int sumDiff = 0;
		
		System.out.print("Digits differences are: ");
		
		for (int i = 0; i< phNumber.length()-1; i++)
		{

			diffArray[i] = phNumber.charAt(i+1) - phNumber.charAt(i);
			System.out.print(diffArray[i] + " ");
			sumDiff += diffArray[i]; 
		}

		System.out.println("\nSum of the absolute digit differences is: " + Math.abs(sumDiff));
		int subTo = Math.abs(sumDiff);
		
		String diffModDecNumber = "";
		for (int i = 0; i< phNumber.length(); i++)
		{
			if ((Character.getNumericValue(phNumber.charAt(i)) + subTo) > 10) {
			diffModDecNumber += ((Character.getNumericValue(phNumber.charAt(i)) + subTo) % 10);
			}
			else 
				diffModDecNumber += (((Character.getNumericValue(phNumber.charAt(i)) - subTo)+10) %10);
				
		}
		return diffModDecNumber;

	}
}
