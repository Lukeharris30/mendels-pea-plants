let offspring = []

function mix(mom, dad, numberOfGenerations){

    let counter = numberOfGenerations 
    
    if(numberOfGenerations > 0) {
        
        let randomInheritanceChance = () => Math.random() <= .5 ? 0 : 1

        function generateGenes(parent1, parent2){
            let genes = [parent1[randomInheritanceChance()], parent2[randomInheritanceChance()]]
            return genes
        }

        function generateTraits(alleles) {

            let isTall = alleles.includes('T')
            let hasMatchingAlleles = alleles[0] === alleles[1]
            let isDominant = hasMatchingAlleles && isTall 

            return {
                generation: counter,
                isTall,
                isDominant,
                alleles, 
                genotype: hasMatchingAlleles ? 'homozygote' : 'heterozygote',
                parents: {mom: mom, dad: dad}
            }
        }
        
        let childrenGenes = []
        for(let i = 0; i < 2; i++){
            childrenGenes.push(generateGenes(mom, dad)) 
        }

        let childTraits = []
        for( const child of childrenGenes){
            childTraits.push(generateTraits(child))
        }
       
        offspring.push(childTraits)
        counter ++
        mix(childrenGenes[0], childrenGenes[1], numberOfGenerations - 1)
    }
    
    return
}


export { offspring, mix}