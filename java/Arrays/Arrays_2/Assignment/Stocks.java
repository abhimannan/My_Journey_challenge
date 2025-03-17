package Assignment;

public class Stocks {
    public static void max_Profit(int[] arr){
        int buying_price = Integer.MAX_VALUE;
        int max_Profit = 0;
        for(int i=0;i<arr.length;i++){
             if(arr[i]>buying_price){
                 int profit = arr[i] - buying_price;
                 max_Profit = Math.max(profit,max_Profit);
             }
             else{
                 buying_price = arr[i];
             }
        }
        System.out.println(max_Profit);
    }
    public static void main(String[] args) {
        int[] arr = {7, 6, 4,  3, 1};
        max_Profit(arr);
    }
}
