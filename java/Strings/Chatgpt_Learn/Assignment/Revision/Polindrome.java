package Revision;

public class Polindrome {
    public static boolean Poli(String s) {
        int N= s.length();
        for(int i=0;i<N/2;i++) {
            int start = i;
            int end = N-i-1;
            if(s.charAt(start)!=s.charAt(end)) {
                 return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String s = "abba";
        System.out.println(Poli(s));
    }
}
