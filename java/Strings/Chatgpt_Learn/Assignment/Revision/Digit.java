package Revision;
public class Digit {
    public static boolean isDigit(String s) {
        int N = s.length();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(ch<'0' || ch>'9') {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String s = "2143fsdg";
        if(isDigit(s)) {
            System.out.println("YES");
        }
        else {
            System.out.println("NO");
        }
    }
}