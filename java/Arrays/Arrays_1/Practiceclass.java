// import java.util.Arrays;
// import java.util.Scanner;

public class Practiceclass {
      /*
    public static int sumof(int[] arr){
        int sum = 0;
        for(int i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        return sum;
        }*/
        // factoroal of a number
        /*
        public static int fact(int n){
            int fact = 1;
            for(int i=1;i<=n;i++){
                fact=fact*i;
            }
            return fact;
        }*/
        /*public static boolean isPrimeNum(int num){
            if(num==2){
                return true;
            } 
            else{
                for(int i=2;i<=Math.sqrt(num);i++){
                    if(num%i==0){
                        return false;
                    }
                }
            }
            return true;
        }*/
        // bianry o decimal conversion
        /*
        public static void BintoDec(int binaryNum){
            int dec = 0;
            int pow = 0;
            while(binaryNum>0){
                int LD = binaryNum%10;
                dec = dec + (LD*(int)(Math.pow(2,pow)));
                pow++;
                binaryNum=binaryNum/10;
            }
            System.out.println(dec);
        }
        public static int DectoBin(int decimalNum){
            int pow = 0;
            int bin = 0;
            while(decimalNum>0){
                int rem = decimalNum%2;
                bin = bin + (rem*(int)(Math.pow(10,pow)));
                pow++;
                decimalNum=decimalNum/2;
            }
            return bin;
        }
            */
        // largest value in a array
        /*
        public static int largestval(int[] arr){
            int large = Integer.MIN_VALUE;
            for(int i=0;i<arr.length;i++){
                if(arr[i]>large){
                    large = arr[i];
                }
            }
            return large;
        }
            */
        // Binary search
        /*
        public static int BinarySearch(int[] arr,int el){
            int start = 0;
            int end = arr.length-1;
            while(start<=end){
                int mid = (start+end)/2;
                if(mid==el){
                    return mid;
                }
                if(mid>el){
                    end = mid-1;
                }
                else{
                    start = mid+1;
                }
            }
            return -1;
        }*/
        /*
        public static void ReverseArr(int arr[]){
            int start = 0;
            int end = arr.length-1;
            while(start<end){
                int temp;
                temp = arr[start];
                arr[start]=arr[end];
                arr[end]=temp;
                start++;
                end--;
            }
            System.out.println("Reversed Array : "+Arrays.toString(arr));
        }
         */
        public static void main(String[] args) {
        // print the 2d arrays
        /*
        int[][] matrix = {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        for(int row=0;row<matrix.length;row++){
            for(int col=0;col<matrix[row].length;col++){
                System.out.print(matrix[row][col]);
            }
            System.out.println();
            int x = -1;
            x--;
            System.out.println(x);
        }
        // System.out.println("Length = ",matrix.length);
        */
        // Array rotation
        /*
        int[] nums ={1,2,3,4,5,6,7};
        int k=3;
        int n = nums.length-1;// n=6
        int end1 = (n-k)+1;
        for(int j=end1;j<=n;j++){
            System.out.print(nums[j]+" ");
        }
        // int end = n-k;
        for(int i=0;i<=end1-1;i++){
            System.out.print(nums[i]+" ");
        }*/
        /*
        int year = 2000;
        if(year%4==0 && year%100!=0 || year%400==0){
            System.out.println("leap year");
        }
        else{
            System.out.println("Not leap year");
        }*/
        /*
        //reverse the number
        int num = 1234;
        while(num>0){
            int x = num%10;
            System.out.print(x+" ");
            num=num/10;
        }*/
        // sum of the numbers
        /*int num = 11111;
        int sum = 0;
        while(num>0){
            int x = num%10;
            sum=sum+x;
            num=num/10;
        }
        System.out.println("sum = "+sum);*/
        // check the num is prime or not
        
        /*int num = 5;
        System.out.println(isPrimeNum(num));
        // factorial in range
        int range = 20;
        for(int i=2;i<=range;i++){
            if(isPrimeNum(i)==true){
                System.out.print(i+" ");
            }
        }*/
        // patterns
       /*
        char letter = 'A';
        for(int i=1;i<=5;i++){
            
            for(int j=1;j<=i;j++){
                
                System.out.print(letter+" ");
                letter++;
            }
            System.out.println();
        }
            */
        // functions
        /*
        int n = 5;
        int r = 3;
        int n_factorial = fact(n);
        int r_factorial = fact(r);
        int nmr_factorial = fact(n-r);
        int BC = n_factorial/(nmr_factorial*r_factorial);
        System.out.println("Binomial Coefficient : "+BC);
        // binomial coefficient
        // formula = n!/((n-r)!*r!)
        */
        // binary to decimal conversion
        /*int binaryNum = 100;
        BintoDec(binaryNum);
        int decimalNum = 7;
        int x = DectoBin(decimalNum);
        System.out.println(x);*/
        /*int rows = 5;
        int cols = 5;
        for(int i=1;i<=rows;i++){
            for(int j=1;j<=cols;j++){
                if(i==1 || i==rows || j==1 || j==cols){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
           System.out.println();
        }*/
       /*
         for(int i=1;i<=5;i++){
            for(int j=1;j<=5-i;j++){
                System.out.print(" ");
            }
            for(int k=1;k<=i;k++){
                System.out.print("*");
            }
            System.out.println();
        }*/
        /*
        int n = 5;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if((i+j)%2==0){
                    System.out.print("1");
                }
                else{
                    System.out.print("0");
                }
            }
            System.out.println();
        }
            */
        /*
        int n = 4;
        for(int i=1;i<=4;i++){
            // stars
            for(int star=1;star<=i;star++){
                System.out.print("*");
            }
            // spaces
            for(int spaces=1;spaces<=2*(n-i);spaces++){
                System.out.print(" ");
            }
            // stars
            for(int star=1;star<=i;star++){
                System.out.print("*");
            }
            System.out.println();
        }
        */
        /*
        int n = 5;
        for(int i=1;i<=n;i++){
            // spaces
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            for(int s=1;s<=n;s++){
                if(i==1 || i==n || s==1 || s==n){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
                
            }
            System.out.println();
        }
            */
       // largest in an array
     /*
     int[] arr = {1,2,3,4,5};
     int value = largestval(arr);
     System.out.println(value);
     */
     // binary search
     /*
     int[] arr = {1,2,3,5,25};
     int el = 25;
     int x = BinarySearch(arr,el);
     System.out.println(x);
     if(x==-1){
        System.out.println("Element not found");
     }
     else{
        System.out.println("Element found");
     }
        */
     // reverse the array
     /*
     int[] arr = {1,2,3,4,5};
     System.out.println("The actual array : "+Arrays.toString(arr));
     ReverseArr(arr);
     */
     /*
     int[] arr = {1,2,3,4,5};
     for(int i=0;i<arr.length;i++){
        for(int j=i+1;j<arr.length;j++){
            int current = arr[i];
            System.out.print(current+","+arr[j]);
        }
        System.out.println();
     }
   */
       

}
}