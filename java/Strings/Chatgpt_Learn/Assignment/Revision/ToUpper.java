package Revision;

public class ToUpper {
    public static void Upper(String s) {
        StringBuilder sb = new StringBuilder();
        int N = s.length();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(ch>='a' || ch<='z') {
                sb.append((char)(ch-32));
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String s = "abhi";
        Upper(s);
    }
}
