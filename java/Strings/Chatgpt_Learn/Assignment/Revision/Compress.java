package Revision;

public class Compress {
    public static void CompressStr(String s) {
        StringBuilder sb = new StringBuilder();
        int N = s.length();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            int count = 1;
            while(i+1<N && ch==s.charAt(i+1)) {
                count++;
                i++;
            }
            sb.append(ch);
            if(count>1) {
                sb.append(count);
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String s = "aabbbccc";
        CompressStr(s);
    }
}
