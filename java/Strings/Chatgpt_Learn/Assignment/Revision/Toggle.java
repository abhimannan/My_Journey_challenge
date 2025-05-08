package Revision;

public class Toggle {
    public static void ToggleStr(String s) {
        StringBuilder sb = new StringBuilder();
        int N = s.length();
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(Character.isLowerCase(ch)) {
                sb.append(Character.toUpperCase(ch));
            }
            else if(Character.isUpperCase(ch)) {
                sb.append(Character.toLowerCase(ch));
            }
            else{
                sb.append(ch);
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String s = "anHI";
        ToggleStr(s);
    }
}
