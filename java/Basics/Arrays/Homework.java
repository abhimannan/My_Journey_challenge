package Arrays;

public class Homework {
    public static int searchelement(String names[],String element){
           for(int i=0;i<names.length;i++){
               if(names[i]==element){
                   return i;
               }
           }
           return -1;
    }
    public static void main(String[] args) {
        String names[]={"geetha","kumar","vijay"};
        String element="abhi";
        int index=searchelement(names,element);
        if(index==-1){
            System.out.print(element+" not found!");
        }
        else{
            System.out.println(element+" is found at index number "+index);
        }
    }
}
