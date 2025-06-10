public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int,int> countMap = new Dictionary<int,int>();

        foreach(int num in arr){
            if(countMap.ContainsKey(num))
                countMap[num]++;
            else
                countMap[num] = 1;
        }

        HashSet<int> occurrences = new HashSet<int>();

        foreach(int count in countMap.Values){
            if(!occurrences.Add(count)){
                return false;
            }
        }

        return true;
    }
}