package Strings.Assignment;
// Questions :
// Count how many times lowercase vowels occurred in a String entered by the user

import java.util.*;

public class VowerlsCount {
    public static void CountLowercaseLetters(String str){
        int count = 0;
        for(int i=0;i<str.length();i++) {
            if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u') {
                count++;
            }
        } 
        System.out.println("No. of vowels = "+ count);
    }

    public static void main(String[] args) {
        // String str = "Abhi";
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string : ");
        String str = sc.nextLine();
        CountLowercaseLetters(str);
    }
}
