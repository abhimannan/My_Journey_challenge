public class MostFrequentChar {
    public static void findChar(String s) {
        int N = s.length();
        int[] count = new int[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            count[ch-'a']++;
        }
        int max = 0;
        char result = 'a';
        for(int i=0;i<count.length;i++) {
            // char ch = s.charAt(i);
            if(max<count[i]) {
                max = count[i];
                result = (char)(i+'a');
            }
        } 
        System.out.println(result);
    }
    public static void main(String[] args) {
        String s = "missippi";
        findChar(s);
    }
}
