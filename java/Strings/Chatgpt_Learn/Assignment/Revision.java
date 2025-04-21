package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

import java.util.Arrays;

public class Revision {
    public static void Anagram(String s1,String s2) {
        // 1. convert into lower case
        s1.toLowerCase();
        s2.toLowerCase();
        if(s1.length()==s2.length()) {
            // 2. convert string to character array
            char[] a1 = s1.toCharArray();
            char[] a2 = s2.toCharArray();
            // 3. sort the array
            Arrays.sort(a1);
            Arrays.sort(a2);
            // 4. check array equals
            boolean result = Arrays.equals(a1, a2);
            if(result) {
                System.out.println("Anagram");
            }
            else{
                System.out.println("Not Anagram");
            }
        }
        else {
            System.out.println("Not Anagram");
        }
    }
    public static void Reverse(StringBuilder sb) {
        int N = sb.length();
        for(int i=0;i<N/2;i++) {
            int si = i;
            int ei = N-1-i;
            char sc = sb.charAt(si);
            char ec = sb.charAt(ei);
            sb.setCharAt(si, ec);
            sb.setCharAt(ei, sc);
        }
        System.out.println(sb);
    }
    public static void main(String[] args) { 
        String s1 = "race";
        String s2 = "care";
        // Anagram(s1, s2);
        StringBuilder sb = new StringBuilder("abcd");
        Reverse(sb);


    }
}
