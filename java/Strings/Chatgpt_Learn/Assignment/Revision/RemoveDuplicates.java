package Revision;

public class RemoveDuplicates {
    public static void EliminateDulicates(String s) {
        int N = s.length();
        StringBuilder sb = new StringBuilder();
        boolean[] arr = new boolean[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(!arr[ch-'a']) {
                sb.append(ch);
                arr[ch-'a'] = true;
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String s = "programming";
        EliminateDulicates(s);
    }
}
