public class char_pyramid {
    public static void main(String[] args) {
         int n=4;
         char letter = 'A';
         for(int line=1;line<=n;line++){
             for(int chars=1;chars<=line;chars++){
                 System.out.print(letter);
                 letter++;
             }
             System.out.println();
         }
    }
}
