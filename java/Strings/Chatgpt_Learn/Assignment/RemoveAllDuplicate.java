public class RemoveAllDuplicate {
    public static void Remove(String s) {
        int N = s.length();
        boolean[] seen = new boolean[26];// initially false
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(!seen[ch-'a']) {      // !false ==> true
                sb.append(ch);
                seen[ch-'a'] = true; // markk as true
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String s = "programming";
        Remove(s);
    }
}
