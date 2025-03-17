public class Buy_and_Selling_Stocks {
    public static void stocks(int[] arr){
         int buying_price = Integer.MAX_VALUE;
         int maxProfit = 0;
         for(int i=0;i<arr.length;i++){
             if(arr[i]>buying_price){// profit
                 int profit = arr[i]-buying_price;// today's profit
                 maxProfit=Math.max(profit,maxProfit);// maximum profit
             }
             else{
                buying_price=arr[i];
             }
         }
         System.out.println("The Maximum Profit is : "+maxProfit);
    }
    public static void main(String[] args) {
         int[] arr = {7,1,5,3,6,4};
         stocks(arr);

    }
}
