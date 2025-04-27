import java.util.Arrays;

public class Recap {
    public static void ReverseString(StringBuilder sb) {
         int N = sb.length();
         for(int i=0;i<N/2;i++) {
            int starti = i;
            int endi = N-i-1;
            char startchar = sb.charAt(starti);
            char endchar = sb.charAt(endi);
            sb.setCharAt(starti, endchar);
            sb.setCharAt(endi, startchar);
         }
         System.out.println(sb);
    }
    public static boolean poli(String name) {
         int N = name.length();
         for(int i=0;i<N/2;i++) {
             char startChar = name.charAt(i);
             char endChar = name.charAt(N-1-i);
             if(startChar!=endChar) {
                 return false;
             }
         }
         return true;
    }
    public static boolean checkNum(String nums) {
         int N = nums.length();
         for(int i=0;i<N;i++) {
            char ch = nums.charAt(i);
            if(ch<'0' || ch>'9') {
                return false;
            }
         }
         return true;
    }
    public static void Toggle(String s) {
        int N = s.length();
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(Character.isLowerCase(ch)) {
                sb.append(Character.toUpperCase(ch));
            }
            else if(Character.isUpperCase(ch)) {
                sb.append(Character.toLowerCase(ch));
            }
            else{
                sb.append(ch);
            }
        }
        System.out.println(sb);
    }
    public static void caseChange(String case1) {
        StringBuilder sb = new StringBuilder();
         int N = case1.length();
         for(int i=0;i<N;i++) {
            char ch = case1.charAt(i);
            if(ch>='a' && ch<='z') {
                sb.append((char)(ch-32));
            }
            else if(ch>='A' && ch<='Z') {
                sb.append((char)(ch+32));
            }
            else{
                sb.append(ch);
            }
         }
         System.out.println(sb);
    }
    public static boolean Anagram(String s1,String s2) {
        s1.toLowerCase();
        s2.toLowerCase();
        if(s1.length()==s2.length()) {
            char[] a1 = s1.toCharArray();
            char[] a2 = s2.toCharArray();
            Arrays.sort(a1);
            Arrays.sort(a2);
            boolean result = Arrays.equals(a1,a2);
            if(result) {
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("abcd");
        // ReverseString(sb);
        String name = "abcdba";
        // System.out.println(poli(name));
        String nums = "1234";
        // System.out.println(checkNum(nums));
        String s = "Abhi";
        // Toggle(s);
        String case1 = "Ab";
        caseChange(case1);
        String s1 = "anagram";
        String s2 = "nagaram";
        System.out.println(Anagram(s1,s2));

    }
}
