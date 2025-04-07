package Strings.Assignment;

import java.util.*;
public class Anagram {
    public static void AnagramCheck(String str1,String str2){
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        if(str1.length()==str2.length()){
            char[] s1 = str1.toCharArray();
            char[] s2 = str2.toCharArray();
            Arrays.sort(s1);
            Arrays.sort(s2);    
            boolean result = Arrays.equals(s1,s2);
            if(result) {
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
    String str1 = "Cheater";
    String str2 = "Teacher";
    AnagramCheck(str1,str2);

    }
}
