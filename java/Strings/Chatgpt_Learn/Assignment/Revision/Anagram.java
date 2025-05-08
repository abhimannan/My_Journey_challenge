package Revision;

import java.util.Arrays;

public class Anagram {
    public static void AnagramCheck(String s1,String s2) {
        s1.toLowerCase();
        s2.toLowerCase();
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        boolean result = Arrays.equals(a1, a2);
        if(result) {
            System.out.println("Anagram");
        }
        else {
            System.out.println("Not Anagram");
        }
    }
    public static void main(String[] args) {
        String s1 = "care";
        String s2 = "race";
        AnagramCheck(s1,s2);
    }
}
