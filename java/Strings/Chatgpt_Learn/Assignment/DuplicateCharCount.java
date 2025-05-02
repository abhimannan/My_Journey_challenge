public class DuplicateCharCount {
    public static void CountDuplicateChars(String s) {
        int N = s.length();
        int[] arr = new int[26];
        //count frequency
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            arr[ch-'a']++;
        }    
        boolean[] seen = new boolean[26];
        // find the duplicate characters
        for(int i=0;i<s.length();i++) {
            char ch = s.charAt(i);
            if(!seen[ch-'a']) {
                if(arr[ch-'a']>1) {
                    System.out.println(ch+" : "+arr[ch-'a']);
                    seen[ch-'a'] = true;
                }
            }
        }
    }
    public static void main(String[] args) {
        String s = "programming";
        CountDuplicateChars(s);
    }
}
