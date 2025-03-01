public class Star {
    public static void main(String[] args) {
        // star pattern
         for(int i=1;i<=4;i++){// for(int i=4;i>=1;j--){----}
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println(" ");
            if(j==4){
                break;
            }
        }

        for(int i=4;i>=1;i--){// for(int i=4;i>=1;j--){----}
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println(" ");
        }
    }
}
