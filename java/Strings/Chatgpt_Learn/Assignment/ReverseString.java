package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

public class ReverseString {
    public static void reverse(StringBuilder sb) {
        int N = sb.length();
        for(int i=0;i<N/2;i++) {
            int start = i;
            int end = N-1-i;
            char startchar = sb.charAt(start);
            char endchar = sb.charAt(end); 
            sb.setCharAt(start, endchar);
            sb.setCharAt(end, startchar);
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        // System.out.println( sb.reverse());
        reverse(sb);
        
    }
}
