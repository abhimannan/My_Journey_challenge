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
            /*
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
            */
            /*
            int n = 5;
            for(int i=1;i<=n;i++) {
                // spaces
                for(int sp=n-i;sp>=1;sp--) {
                    System.out.print(" ");
                } 
                // stars
                for(int sr=1;sr<=n;sr++) {
                    if(i==1 || i==n || sr==1 || sr==n) {
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=1;i<=5;i++) {
                for(int col=1;col<=i;col++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            for(int row=1;row<=n-1;row++) {
                for(int col=n-row;col>=1;col--) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=1;i<=n;i++) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=1;i<=n;i++) {
                // spaces
                for(int sp=1;sp<=(i-1);sp++) {
                    System.out.print(" ");
                }
                for(int st=1;st<=(n-i+1);st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=1;i<=n;i++) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int st=1;st<=(i*2-1);st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            for(int i=n;i>=1;i--) {
                // spaces
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                // stars
                for(int st=1;st<=(i*2-1);st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int n = 5;
            for(int i=n;i>=1;i--) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int st=1;st<=i;st++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
            for(int i=1;i<=n;i++) {
                // spaces
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                // stars
                for(int st=1;st<=i;st++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
            */
            // int n =6;
            /*
            for(int i=1;i<=n;i++) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int k=1;k<=(i*2-1);k++) {
                    if( k==1 || k==(i*2-1)){
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                    
                }
                System.out.println();
            }
            for(int i=n;i>=1;i--) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int k=(i*2-1);k>=1;k--) {
                    if( k==1 || k==(i*2-1)){
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                    
                }
                System.out.println();
            }
            */
            /*
            for(int i=1;i<n;i++) {
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                for(int k=1;k<=i;k++) {
                    
                    
                }
                System.out.println();
            }
            */
            /*
            int n = 4;
            for(int i=1;i<=n;i++) {
                // spaces
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                // print in decreasing order
                for(int j=i;j>=1;j--) {
                    System.out.print(j);
                }
                // print in increasing order
                for(int j=2;j<=i;j++) {
                    System.out.print(j);
                }
                System.out.println();
            }
            // lower part
            for(int i=(n-1);i>=1;i--) {
                // spaces
                for(int sp=1;sp<=(n-i);sp++) {
                    System.out.print(" ");
                }
                // decresing order
                for(int j=i;j>=1;j--) {
                    System.out.print(j);
                }
                // incresing order
                for(int j=2;j<=i;j++) {
                    System.out.print(j);
                }
                System.out.println();
            }
            */
            /* 
            int N = 5;
            for(int i=N;i>=1;i--) {
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                for(int sp=1;sp<=((N*2)-(i+i));sp++) {
                    System.out.print(" ");
                }
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            for(int i=1;i<=N;i++) {
                // star
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                // spaces
                for(int sp=1;sp<=(N*2)-(i+i);sp++) {
                    System.out.print(" ");
                }
                // stars
                for(int st=1;st<=i;st++) {
                    System.out.print("*");
                }
                System.out.println();
            }
            */
            /*
            int N = 5;
            for(int i=1;i<=N;i++) {
                for(int col=1;col<=(N-1);col++) {
                    if(i==1 || col==(N-1) || i==N || col==1) {
                        System.out.print("*");
                    }
                    else{
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
            */
            /* 
            int num = 1;
            for(int i=1;i<=5;i++) {
                for(int col=1;col<=i;col++) {
                    System.out.print(num+" ");
                    num++;
                }
                System.out.println();
            }
            */
            /*
            for(int i=1;i<=5;i++) {
                for(int j=1;j<=i;j++) {
                    if((i+j)%2==0) {
                        System.out.print("1"+" ");
                    }
                    else{
                        System.out.print("0"+" ");
                    }
                }
                System.out.println();
            }
        */
        /*
        int N = 5;
           for(int i=1;i<=N;i++) {
              // spaces
              for(int sp=1;sp<=(N-i);sp++) {
                  System.out.print(" ");
              }
              // stars
              for(int st=1;st<=N;st++) {
                  if(i==1 || st==1 || i==N || st==N) {
                      System.out.print("*");
                  }
                  else{
                    System.out.print(" ");
                  }
              }
              System.out.println();
           }
          */
          /*
          int N = 6;
          for(int i=1;i<=N;i++) {
              for(int j=N;j>=i;j--) {
                System.out.print(i);
              }
              System.out.println();
          }
          */
          /*
          int N = 4;
          int num = 1;
          int temp_num = 20;
          for(int i=4;i>=1;i--) {
            // spaces
            for(int sp=1;sp<=(N-i);sp++) {
                System.out.print(" ");
            }
            // numbers
            for(int j=1;j<=i;j++) {
                System.out.print(num);
                num++;
            }

            int start = temp_num-i+1;
            for(int t=0;t<i;t++) {
                System.out.print((start+t)+" ");
            }
            temp_num = temp_num-i;// update the temp_num for find next start value
            System.out.println();
          }
        */
        /*
        for(int i=1;i<=5;i++) {
            // spaces
            for(int sp=1;sp<=(5-i);sp++) {
                System.out.print(" ");
            }
            // stars
            for(int j=1;j<=i;j++) {
                System.out.print("*"+" ");
            }
            System.out.println();
        }
        for(int i=4;i>=1;i--) {
            // sapces
            for(int sp=1;sp<=(4-i+1);sp++) {
                System.out.print(" ");
            }
            // stars
            for(int st=1;st<=i;st++) {
                System.out.print("*"+" ");
            }
            System.out.println();
        }
        */
        /*
        int N = 5;
        for(int i=1;i<=N;i++) {
            // spaces
            for(int sp=1;sp<=(N-i);sp++) {
                System.out.print(" ");
            }
            // decreasing order
            for(int h=i;h>=1;h--) {
                System.out.print(h);
            }
            // increasing order
            for(int l=2;l<=i;l++) {
                System.out.print(l);
            }
            System.out.println();
            
        }
        */
        /*
        for(int i=0;i<5;i++) {
            char ch = (char)('E'-i);
            for(int j=0;j<=i;j++) {
                System.out.print(ch+" ");
                ch++;
            }
            System.out.println();
        }

        char ch = 'a';
        boolean upper = false;
        for(int i=1;i<=5;i++) {
            for(int j=1;j<=i;j++) {
                if(upper) {
                    System.out.print(Character.toUpperCase(ch)+" ");
                }
                else{
                    System.out.print(ch+"  ");
                }
                
                ch++;
                upper = !upper;
            }      
            System.out.println();     
        }
        */
        /*
        for(int i=5;i>=1;i--) {
            char ch = (char)('A'+i);
            for(int j=1;j<=i;j++) {
                System.out.print((char)(ch-j)+" ");
            }
            System.out.println();
        }
        */
        for(int i=1;i<=4;i++) {
            // num
            for(int num=1;num<=i;num++) {
                System.out.print(num);
            }
            // spaces
            for(int sp=1;sp<=2*(4-i);sp++) {
                System.out.print(" ");
            }
            // num in increasing order
            for(int j=i;j>=1;j--) {
                System.out.print(j);
            }
            System.out.println();
        }

        }
    }

