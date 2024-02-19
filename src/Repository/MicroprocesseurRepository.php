<?php

namespace App\Repository;

use App\Entity\Microprocesseur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Microprocesseur>
 *
 * @method Microprocesseur|null find($id, $lockMode = null, $lockVersion = null)
 * @method Microprocesseur|null findOneBy(array $criteria, array $orderBy = null)
 * @method Microprocesseur[]    findAll()
 * @method Microprocesseur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MicroprocesseurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Microprocesseur::class);
    }

//    /**
//     * @return Microprocesseur[] Returns an array of Microprocesseur objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Microprocesseur
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
