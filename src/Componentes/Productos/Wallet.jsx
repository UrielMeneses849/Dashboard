import { Box, Flex, Text } from "@chakra-ui/react";

export default function Wallet(){

    function getCurrentDateTime() {
        const now = new Date();
        
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const timeString = now.toLocaleTimeString('en-US', options);
    
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'short' });
        
        return `${timeString}, ${day} ${month}`;
    }

    const Balance= (Math.random()*10000).toFixed(2)
    const BalanceFormatted = Number(Balance).toLocaleString();

return(
<>
<Flex p="8%" bg="#9F7BEA" borderRadius="24px" flexDirection="column" justifyContent="space-between" gap="50px" maxHeight="26%" boxSizing="border-box" className="credit-card">
<Flex justifyContent="space-between" alignItems="center" >
  <Box padding="5%" bg="#EDEDED" borderRadius="16px" display="inline-block" className="animate-icon" > 
    <i className="uil uil-wallet" style={{color: "#121212"}}></i>
  </Box>

  <Text fontSize="sm" fontWeight="300" color="white" className="date">{getCurrentDateTime()}</Text>
</Flex>

<Flex justifyContent="space-between">
<Flex flexDirection="column">
<Text fontSize="sm" fontWeight="300" color="white">Credit</Text>
<Text fontSize="xl" fontWeight="600" color="white">${BalanceFormatted}</Text>

</Flex>
<img src="https://firebasestorage.googleapis.com/v0/b/base-de-datos-portafolio.appspot.com/o/IconosSVG%2FFrame%201305.svg?alt=media&token=9a620a61-abaa-49c8-b253-f369b9bb5744" alt="" 
style={{maxWidth: "20%"}}/>
</Flex> 
</Flex>

</>
)}