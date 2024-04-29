import java.util.Scanner;
public class Parttens {
    /**
     * @param args
     */
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=n;j>i;j--){
                System.out.print("  ");
            }
            for(int j=1;j<=i;j++){
                System.out.print(j+" ");
            }
            for(int j=i-1;j>=1;j--){
                System.out.print(j+" ");
            }
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            // Print spaces
            for (int j = n; j > i; j--) {
                System.out.print("  ");
            }

            // Print numbers in ascending order
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }

            // Print numbers in descending order
            for (int j = i - 1; j >= 1; j--) {
                System.out.print(j + " ");
            }

            
            System.out.println();
        }
    }
}