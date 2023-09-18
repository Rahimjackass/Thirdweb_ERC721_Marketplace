import { Container, Heading, Text } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";

export default function ProfilePage() {
    const router = useRouter();

    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

    const { data: ownedNFTs, isLoading: loadingOwnedNFTs} = useOwnedNFTs(nftCollection, router.query.address as string)

    return (
        <Container maxW={"1200px"} p={5}>
            <Heading>{"Owned NFT(s)"}</Heading>
            <Text>Browse and manage your NFTs from this collection.</Text>
            <NFTGrid 
                data={ownedNFTs}
                isLoading={loadingOwnedNFTs}
                emptyText={"You don't own any NFTs yet from this collection."}
            />
        </Container>
    ) 
}