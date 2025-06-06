public class Solution {
    public void DuplicateZeros(int[] arr) {
        int length = arr.Length;
        List<int> results = new List<int>();

        for(int i = 0; i < length; i++){
            if(arr[i] == 0){
                results.Add(0);
                results.Add(0);
            }
            else{
                results.Add(arr[i]);
            }
        }

        for (int i = 0; i < length; i++) {
            arr[i] = results[i];
        }
    }
}