package encryptions;

public class EncAlgorithms{

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

	public static long diffModEnc(long number) {

		String strNumber = "" + number;
		int[] diffArray = new int[9];
		int sumDiff = 0;
		for (int i = 0; i< strNumber.length()-1; i++)
		{

			diffArray[i] = strNumber.charAt(i+1) - strNumber.charAt(i);
			System.out.println("diffArray["+i+"]: " + diffArray[i]);
			sumDiff += diffArray[i]; 
		}

		System.out.println("sumDiff: " + Math.abs(sumDiff));
		int addTo = Math.abs(sumDiff);

		String diffModEncNumber = "";
		for (int i = 0; i< strNumber.length(); i++)
		{
			diffModEncNumber += ((Character.getNumericValue(strNumber.charAt(i)) + addTo) % 10);

		}
		return Long.parseLong(diffModEncNumber);

	}
}
