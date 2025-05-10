package My_Journey_challenge.java.Patterns;

public class BasicPatterns {
    
    public static void main(String[] args) {
        /*
        for(int i=1;i<=5;i++) {
            for(int j=1;j<=i;j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        for(int i=5;i>=0;i--) {
            for(int j=1;j<=i;j++) {
                System.out.print("*");
            }
            System.out.println();
        }
            */
        /* 
            for(int i=1;i<=5;i++) {
            int num = 1;
            for(int j=num;j<=i;j++){
                if(j%2==0){
                    System.out.print("2 ");
                }
                else{
                    System.out.print("1 ");
                }
            }
            System.out.println();
        }
        */
        /*
        char letter = 'A';
        for(int i=0;i<4;i++) {
            for(int j=0;j<=i;j++) {
                System.out.print(letter);
                letter++;
            }
            System.out.println();
        }
        */
        /*
        int rows = 5;
        int cols = 5;
        for(int i=0;i<=rows;i++) {
            for(int j=0;j<=cols;j++) {
                if(i==0 || j==0 || i==rows || j==cols) {
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        */
        /*
        for(int i=1;i<=4;i++) {
            for(int j=1;j<=i;j++) {
                System.out.print("*");
            } 
            System.out.println();
        }
        */
        /*
        for(int i=1;i<=4;i++) {
            for(int spaces=1;spaces<=4-i;spaces++) {
                System.out.print(" ");
               }
                for(int j=i;j>=1;j--) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=0;i<=n;i++) {
                int num = 1;
                for(int j=n;j>=i;j--) {
                    System.out.print(num);
                    num++;
                }
                System.out.println();
            }
            */
            /*
            int num =1;
            for(int i=0;i<=5;i++) {
                for(int j=0;j<=i;j++) {
                    System.out.print(num+ " ");
                    num++;
                }
                System.out.println();
            }
            for(int i=0;i<=4;i++) {
                for(int j=0;j<=i;j++) {
                    if((i+j)%2==0) {
                        System.out.print("0");
                    }
                    else {
                        System.out.print("1");
                    }
                }
                System.out.println();
            }
                */
            int n=8;
            for(int i=1;i<=4;i++) {
                //stars
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                // spaces
                for(int sp=1;sp<=n-(i+i);sp++) {
                    System.out.print(" ");
                }
                // stars
                for(int j=1;j<=i;j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            for(int i=4;i>=1;i--) {
                //stars
                for(int st=i;st>=1;st--) {
                    System.out.print("*");
                }
                // spaces
                for(int sp=n-(i+i);sp>=1;sp--) {
                    System.out.print(" ");
                }
                // stars
                for(int j=1;j<=i;j++) {
                    System.out.print("*");
                }
                System.out.println();
            }

    

        }
    }

