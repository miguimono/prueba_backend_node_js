PGDMP                          x            peak_u    12.1    12.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    20249    peak_u    DATABASE     x   CREATE DATABASE peak_u WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE peak_u;
                postgres    false            �          0    20361    address 
   TABLE DATA           D   COPY public.address (id_address, address, fk_id_client) FROM stdin;
    public          postgres    false    205   �	       �          0    20350    client 
   TABLE DATA           I   COPY public.client (id_client, name, lastname, email, phone) FROM stdin;
    public          postgres    false    203   :
       �          0    20380    driver 
   TABLE DATA           F   COPY public.driver (id_driver, status, fk_id_order, name) FROM stdin;
    public          postgres    false    209   *       �          0    20372    order 
   TABLE DATA           S   COPY public."order" (id_order, date, min_hour, max_hour, fk_id_client) FROM stdin;
    public          postgres    false    207   �       �           0    0    Order_id_order_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Order_id_order_seq"', 6, true);
          public          postgres    false    206            �           0    0    address_id_address_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.address_id_address_seq', 7, true);
          public          postgres    false    204            �           0    0    client_id_client_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.client_id_client_seq', 12, true);
          public          postgres    false    202            �           0    0    driver_id_driver_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.driver_id_driver_seq', 9, true);
          public          postgres    false    208            �   C   x�-ʫ�@Q�P5�;<i`��_�b�n�����0�%�4GH�5��^��H1�g-�z��� ~���      �   �   x�m��J1���8]���졗����`��&�k��[�����]�S>�����B_|�}����p3p���<�!�us��UklR/����
�����:q\�.>��]97��H��&<�jF��U�6�b�S��X�Ď�^�´F�՞*2�}ϧ�������Oٍ��̂ˊFF�����،��c�t�elWc���'�v������,�&�^WJ�_�cr�      �   K   x�3�,���t)�,K-R0�2G�sY��-��P�F\&�i��0�	�)�k�r��0�!�1�k�s��qqq v^ S      �   B   x�3�4202�50�54�4��20 "NCc(È���I�!�a�e�_���!�
�ц�0W� {��     