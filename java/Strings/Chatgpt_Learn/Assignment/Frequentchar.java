public class Frequentchar {
    public static void countchar(String s) {
        int N = s.length();
        int[] arr = new int[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            arr[ch-'a']++;
        }
        int max = 0;
        char result = 'a';
        for(int i=0;i<arr.length;i++) {
            if(arr[i]>max) {
                max = arr[i];
                result = (char)(i+'a');
            }
        }
        System.out.println(result);
    }
    public static void main(String[] args) {
        String s = "programming";
        countchar(s);
    }
}