package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

import java.util.Arrays;

public class Anagram {
    public static void CheckAnagram(String str1,String str2) {
        str1.toLowerCase();
        str2.toLowerCase();
        if(str1.length()==str2.length()) {
        char[] charArr1 = str1.toCharArray();
        char[] charArr2 = str2.toCharArray();

        Arrays.sort(charArr1);
        Arrays.sort(charArr2);

        boolean result = Arrays.equals(charArr1, charArr2);
        if(result){
            System.out.println("Anagram");
        }
        else{
            System.out.println("Not Anagram");
        }
        }

        else{
            System.out.println("Not Anagram");
        }
    }
    public static void main(String[] args) {
        String str1 = "abab";
        String str2 = "bbaa";
        CheckAnagram(str1, str2);
    }
}
