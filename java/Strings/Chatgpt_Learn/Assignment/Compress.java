public class Compress {
    public static void CompressFun(String name) {
         int N = name.length();
         StringBuilder sb = new StringBuilder();
         int count = 1;
         for(int i=0;i<N;i++) {
            while(i+1<N && name.charAt(i)==name.charAt(i+1)) {
                count++;
                i++;
            }
            sb.append(name.charAt(i));
            sb.append(count);
            count = 1; // reset the count value
        }
          
         System.out.println(sb);

    }
    public static void main(String[] args) {
        String name = "aabbc";
        CompressFun(name);

    }
}
