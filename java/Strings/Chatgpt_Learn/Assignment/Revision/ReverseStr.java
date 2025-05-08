package Revision;

public class ReverseStr {
    public static void Reverse(StringBuilder s) {
        int N = s.length();
        for(int i=0;i<N/2;i++) {
            // index
            int sindex = i;
            int eindex = N-i-1;
            char schar = s.charAt(sindex);
            char echar = s.charAt(eindex);
            s.setCharAt(sindex, echar);
            s.setCharAt(eindex,schar);
        }
        System.out.println(s);
    }
    public static void main(String[] args) {
        StringBuilder s = new StringBuilder("abcd");
        Reverse(s);
    }
}
