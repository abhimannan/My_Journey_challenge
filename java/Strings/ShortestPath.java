public class ShortestPath {
    public static void Displacement(String directions) {
        int x = 0;
        int y = 0;
        int n = directions.length();
        for(int i=0;i<n;i++) {
             if(directions.charAt(i)=='N'){
                y = y+1;
             }
             else if(directions.charAt(i)=='S'){
                y= y-1;
             }
             else if(directions.charAt(i)=='E') {
                x = x+1;
             }
             else{
                x = x-1;
             }
        }
         // calculate the displacement
         // explore the type casting in java to understand it better
        int distance =(int)Math.sqrt(Math.pow(x,2) + Math.pow(y, 2));
        System.out.println("The Displacemnet is = "+distance);
    }
    public static void main(String[] args) {
        String directions = "ABCD";
        Displacement(directions);
    }

}
