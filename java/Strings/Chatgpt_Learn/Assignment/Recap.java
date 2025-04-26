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
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("abcd");
        // ReverseString(sb);
        String name = "abcdba";
        System.out.println(poli(name));


    }
}
