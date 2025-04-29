public class NonRepeatingChar {
    public static int CountNonRepeatedChar(String name) {
        int N = name.length();
        int[] arr = new int[26];
        for(int i=0;i<N;i++) {
            char ch = name.charAt(i);
            arr[ch-'a']++;
        }
        for(int i=0;i<N;i++) {
            char ch = name.charAt(i);
            if(arr[ch-'a']==1) {
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        String name = "abcd";
        System.out.println( CountNonRepeatedChar(name));


    }
}
